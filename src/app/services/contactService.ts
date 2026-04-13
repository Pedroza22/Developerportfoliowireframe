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
      // Si tenemos una URL de API real configurada
      if (APP_CONFIG.api.baseUrl !== 'http://localhost:8000/api') {
        const response = await fetch(`${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.contactEndpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return { success: true };
      }

      // Simulación para desarrollo
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data submitted (Simulated):', data);
      
      // Simular éxito
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
