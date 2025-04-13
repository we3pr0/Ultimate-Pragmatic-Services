import emailjs from '@emailjs/browser';

interface EmailData {
  fullName: string;
  email: string;
  phone: string;
  sampleType: string;
  industry: string;
}

export const sendConfirmationEmail = async (data: EmailData) => {
  try {
    const templateParams = {
      to_email: data.email,
      to_name: data.fullName,
      sample_type: data.sampleType,
      industry: data.industry || 'not specified',
      phone: data.phone || 'not provided'
    };

    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { success: true, result };
  } catch (error) {
    console.error('Request failed:', error);
    return { success: false, error };
  }
};