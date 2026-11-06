export interface FormServiceConfig {
  /**
   * Set to a production form endpoint (e.g. Formspree, Resend webhook, or custom serverless function)
   * to automatically route employment applications to heartbeathhc@gmail.com upon publishing.
   */
  endpointUrl: string | null;
  notificationEmail: string;
}

export const careerFormConfig: FormServiceConfig = {
  endpointUrl: null, // Configure production webhook/endpoint before publishing to route emails
  notificationEmail: 'heartbeathhc@gmail.com',
};
