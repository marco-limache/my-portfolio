#!/usr/bin/env bash
set -euo pipefail

echo "Setting up WebPersonal development environment..."

# Install Node dependencies
npm install

echo ""
echo "Done. Run 'npm run dev' to start the dev server at http://localhost:4321"
