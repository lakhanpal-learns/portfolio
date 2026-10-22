import { creditRiskDetails } from "@/content/project-details/credit-risk";
import { customerChurnDetails } from "@/content/project-details/customer-churn";
import { supplyChainDetails } from "@/content/project-details/supply-chain";
import { uberPlatformDetails } from "@/content/project-details/uber-platform";
import { bankingPipelineDetails } from "@/content/project-details/banking-pipeline";
import { stockMarketPipelineDetails } from "@/content/project-details/stock-market-pipeline";
import { globalJobTrackerDetails } from "@/content/project-details/global-data-science-job-tracker";
import { vrindaStoreDetails } from "@/content/project-details/vrinda-store-sales";
import { dataAnalysisDetails } from "@/content/project-details/stock-market-analysis-dashboard";
import { comicWebsiteDetails } from "@/content/project-details/comic-website";

const projectDetails = {
  "credit-risk": creditRiskDetails,
  "digital-payments-fraud": customerChurnDetails,
  "supply-chain": supplyChainDetails,
  "uber-platform": uberPlatformDetails,
  "banking-data-engineering": bankingPipelineDetails,
  "stock-market-pipeline": stockMarketPipelineDetails,
  "global-data-science-job-tracker": globalJobTrackerDetails,
  "vrinda-store-sales": vrindaStoreDetails,
  "stock-market-analysis-dashboard": dataAnalysisDetails,
  "comic-website": comicWebsiteDetails,
};

export function getProjectDetails(slug: string) {
  return projectDetails[slug as keyof typeof projectDetails];
}