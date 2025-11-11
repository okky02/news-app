export default function Content({ contentSnippet }) {
  return (
    <article>
      <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-7 sm:leading-8">
        {contentSnippet.split("\n").map(
          (paragraph, index) =>
            paragraph.trim() && (
              <p key={index} className="mb-4 sm:mb-6 text-justify">
                {paragraph.trim()}
              </p>
            )
        )}
      </div>
    </article>
  );
}
