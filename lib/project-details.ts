import { creditRiskDetails } from "@/content/project-details/credit-risk";
import { customerChurnDetails } from "@/content/project-details/customer-churn";
const projectDetails = {
  "credit-risk": creditRiskDetails,
  "customer-churn": customerChurnDetails,
};

export function getProjectDetails(slug: string) {
  return projectDetails[slug as keyof typeof projectDetails];
}

// What this does

// It creates a small lookup:

// "credit-risk"
//       ↓
// creditRiskDetails

// So later the page can simply say:

// getProjectDetails(slug)

// instead of importing every detail file directly.

// Why we're doing this

// Later we'll have:

// content/project-details/
// ├── credit-risk.ts
// ├── supply-chain.ts
// ├── sql-analytics.ts
// └── ...

// and this loader becomes the single doorway to those files.