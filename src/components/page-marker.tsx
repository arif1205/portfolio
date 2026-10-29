// Thin accent line on the card's left edge marking the page title.
export function PageMarker() {
  return <span aria-hidden="true" className="absolute -top-1 -left-px -ml-4 block h-13 w-px bg-blue-500/50" />;
}
