class ContactService {
  processContactMessage({ name, email, subject, message }) {
    console.log('📬 [Express Contact Service] New inquiry received:');
    console.log(`👤 From: ${name} <${email}>`);
    console.log(`📌 Subject: ${subject || '(No subject provided)'}`);
    console.log(`💬 Message: ${message}`);
    console.log('──────────────────────────────────────────────────');

    return {
      success: true,
      timestamp: new Date().toISOString(),
      message: `Thank you ${name}! Your inquiry has been received by Jnanesh.`
    };
  }
}

module.exports = new ContactService();
