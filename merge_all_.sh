#!/bin/bash

# Daftar cabang yang ingin digabungkan
branches=("feat/contact_form" "feat/google_sheet_api" )

# Pindah ke cabang utama dan dapatkan perubahan terbaru
git checkout main
git pull origin main

# Loop melalui cabang-cabang dan gabungkan ke cabang utama
for branch in "${branches[@]}"; do
    git merge "$branch"
done

# Commit perubahan penggabungan
git commit -m "Merge all branches into main"

# Push perubahan ke repositori jarak jauh
git push origin main
