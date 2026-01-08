# Keys Notes - Day 24

## React Reconciliation
React compares virtual DOM with real DOM to find changes. This process is reconciliation.

## Why Key Helps
Key tells React which items are the same, so it can update efficiently instead of re-creating elements.

## Index as Key Problem
Using index as key causes bugs when reordering. React thinks wrong items changed, leading to wrong updates.

Example: [A, B, C] with keys [0,1,2]
Reorder to [B, A, C] keys become [1,0,2]
React thinks A moved to position 1, B to 0, but actually B moved to 0, A to 1.
This causes state bugs and wrong renders.

Always use unique id as key.</content>
<parameter name="filePath">d:\React-js(Practice)\learning-notes\week-05\day24-keys-notes.md