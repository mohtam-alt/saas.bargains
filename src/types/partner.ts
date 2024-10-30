export interface Partner {
  id?: string;
  fields: {
    PartnerID: number;
    "Linked Products"?: string[];
    "Joined Date": string;
    "Work Email"?: string;
  };
  createdTime?: string;
}

export interface Product {
  id?: string;
  fields: {
    Name: string;
    Description: string;
    Price: number;
    Discount: number;
    StartDate: string;
    EndDate: string;
    Category: string;
    URL: string;
  };
}