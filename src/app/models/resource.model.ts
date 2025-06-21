export interface Resource {
  id: string;
  disaster_id: string;
  name: string;
  location_name: string | null;
  location: string;
  type: string;
  created_at: string;
}
