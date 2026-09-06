export type ProjectDetailSection =
  | {
      id: string;
      type: "overview";
      title: string;
      content: string;
    }
  
    | {
      id: string;
      type: "tech-stack";
      title: string;
      items: string[];
    }
    
  | {
      id: string;
      type: "problem";
      title: string;
      content: string;
    }
  | {
      id: string;
      type: "solution";
      title: string;
      content: string;
    }
  | {
      id: string;
      type: "architecture";
      title: string;
      content: string;
    }
  | {
      id: string;
      type: "features";
      title: string;
      items: string[];
    }
  | {
      id: string;
      type: "gallery";
      title: string;
      images: string[];
    }
  | {
      id: string;
      type: "dashboard";
      title: string;
      images: string[];
    }
  | {
      id: string;
      type: "database";
      title: string;
      content: string;
    }
  | {
      id: string;
      type: "etl";
      title: string;
      content: string;
    }
  | {
      id: string;
      type: "business-rules";
      title: string;
      content: string;
    }
  | {
      id: string;
      type: "markdown";
      title: string;
      content: string;
    };