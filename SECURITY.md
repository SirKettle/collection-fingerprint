# Security

Please report a vulnerability privately, through
[GitHub's private vulnerability reporting](https://github.com/SirKettle/collection-fingerprint/security/advisories/new),
not in a public issue. You should hear back within a week.

Only the latest published minor version receives fixes while the package is 0.x.

The package renders data its consumer supplies. Labels and other text are drawn as text, never as
HTML; category links (`href`) are rendered as given, so a consumer passing untrusted URLs should
check their scheme first. Nothing is fetched and nothing leaves the page.
