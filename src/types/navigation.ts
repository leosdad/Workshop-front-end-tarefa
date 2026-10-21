export interface NavItem {
  id: string;
  label: string;
}

export interface NavGroup {
  id: string;
  items: NavItem[];
}
