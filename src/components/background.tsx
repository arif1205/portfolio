// Blurred streak artwork that only shows behind the dark theme.
export function Background() {
  return (
    <div
      id="background"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden bg-[url(/static/img/background.jpg)] bg-size-[100%_100%] bg-center bg-no-repeat opacity-15 dark:block"
    />
  );
}
