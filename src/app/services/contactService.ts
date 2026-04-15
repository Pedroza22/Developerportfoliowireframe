import { APP_CONFIG } from '../config/constants';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactService = {
  async sendMessage(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
    try {
      const formspreeId = 'mwvapaor'; // Integrado directamente según tu requerimiento
      
      // Envío real a Formspree
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      return { success: true };
    } catch (error) {
      console.error('Error sending message:', error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  },
};
