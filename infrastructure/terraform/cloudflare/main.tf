terraform {
  required_version = ">= 1.5"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# Cloudflare Pages project
# Uncomment and configure once the project exists in Cloudflare
#
# resource "cloudflare_pages_project" "portfolio" {
#   account_id        = var.cloudflare_account_id
#   name              = "my-portfolio"
#   production_branch = "main"
#
#   build_config {
#     build_command   = "npm run build"
#     destination_dir = "dist"
#   }
# }
