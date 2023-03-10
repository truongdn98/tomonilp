export default interface Notification {
    
  data: {
    body: string | null | undefined;
    resource: string | null | undefined;
    title: string | null | undefined;
  };
  updated_at: number | 0;
  read_at: number | 0;
  id: string | '';
}
