const nodemailer = require("nodemailer");
const schedule = require("node-schedule");

exports.send = async (req, res) => {
  const { email, title, requestDate, name } = req.body;

  // console.log(email);
  // console.log(title);
  // console.log(requestDate);
  // console.log(name);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const dueDate = new Date(requestDate);
    dueDate.setDate(dueDate.getDate() + 15); //added 15days 

    const mailOptions = {
      from: `"LMS" <${process.env.EMAIL}>`,
      to: email,
      subject: "Book Request Approved",
      html: `
        <h1>Approved !!</h1>
        <p>Dear ${name},</p>
        <p>Your request for the book titled <strong>${title}</strong> has been approved.</p>
        <p>Due Date: <span style="color: red;">${new Date(dueDate)}</span></p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: " + error);
        res.status(401).json({ status: 401, error });
      } else {
        console.log("Email sent: " + info.response);
        
        // Schedule the reminder email
        const reminderDate = new Date(dueDate);
        reminderDate.setHours(9, 0, 0, 0); // Set the reminder time to 9:00 AM on the due date

        const job = schedule.scheduleJob(reminderDate, () => {
          const reminderMailOptions = {
            from:`"LMS" <${process.env.EMAIL}>`,
            to: email,
            subject: "Reminder: Book Request Due",
            html: `
              <h1>Reminder!!</h1>
              <p>Dear ${name},</p>
              <p>This is a reminder that your request for the book titled <strong>${title}</strong> is due today.</p>
              <p>Due Date: <span style="color: red;">${new Date(dueDate)}</span></p>
            `,
          };

          transporter.sendMail(reminderMailOptions, (error, info) => {
            if (error) {
              console.log("Reminder Error: " + error);
            } else {
              console.log("Reminder Email sent: " + info.response);
            }
          });
        });

        res.status(201).json({ status: 201, info, reminderJobId: job.id });
      }
    });
  } catch (error) {
    console.log("Error: " + error);
    res.status(401).json({ status: 401, error });
  }
};
