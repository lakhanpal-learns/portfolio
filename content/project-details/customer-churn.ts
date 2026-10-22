import type { ProjectDetailSection } from "@/types/project-detail";

export const customerChurnDetails: {
  slug: string;
  sections: ProjectDetailSection[];
} = {
  slug: "customer-churn",

  sections: [
    {
      id: "overview",
      type: "overview",
      title: "Customer Churn Prediction",
      content:
        "An analytics and machine learning project that studies customer behavior and identifies customers who may leave a business.",
    },

    {
      id: "tech-stack",
      type: "tech-stack",
      title: "Tech Stack",
      items: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Jupyter Notebook",
      ],
    },

    {
      id: "problem",
      type: "problem",
      title: "Business Problem",
      content:
        "Businesses lose revenue when customers stop using their products or services. Identifying customers who are likely to leave can help businesses take preventive actions and improve customer retention.",
    },

    {
      id: "solution",
      type: "solution",
      title: "Solution",
      content:
        "The project analyzes customer data, performs data preparation and feature engineering, and uses machine learning to predict the possibility of customer churn.",
    },

    {
      id: "features",
      type: "features",
      title: "Key Features",
      items: [
        "Customer data analysis",
        "Data cleaning and preprocessing",
        "Feature engineering",
        "Machine learning model training",
        "Customer churn prediction",
        "Model evaluation",
      ],
    },

    {
      id: "architecture",
      type: "architecture",
      title: "Architecture",
      content:
        "Customer data is first collected and cleaned. Relevant features are then prepared for machine learning. The trained model analyzes customer behavior and produces churn predictions that can support customer retention decisions.",
    },
  ],
};
