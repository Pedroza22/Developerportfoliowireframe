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
      // Reemplaza "TU_FORMSPREE_ID" con el ID real que te dé Formspree. 
      // Debería ser algo como "xqkjdqjd"
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'mwvapaor';
      
      // Si aún no se ha configurado el ID real, mostramos una advertencia en consola
      // y simulamos el envío para no romper la UI.
      if (formspreeId === 'TU_FORMSPREE_ID') {
        console.warn('Formspree ID no configurado. Simulando envío. Para recibir correos reales, cambia TU_FORMSPREE_ID por tu ID real.');
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form data submitted (Simulated):', data);
        return { success: true };
      }

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
