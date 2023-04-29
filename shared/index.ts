import sanitize from 'sanitize-html';

export function print(actor: string, message: string) {
  console.log(`${actor} is printing message "${message}" from shared utils!`);
}

export function sanitizeHtml(html: string) {
  return sanitize(html, {
    allowedTags: [],
  });
}
