export default function decorate(block) {
  const [titleRow, textRow, imageRow] = [...block.children];
  const title = titleRow?.firstElementChild;
  const text = textRow?.firstElementChild;
  const image = imageRow?.firstElementChild;

  const content = document.createElement('div');
  content.className = 'title-text-image-content';

  if (title) {
    const heading = document.createElement('div');
    heading.className = 'title-text-image-title';
    heading.replaceChildren(...title.childNodes);
    content.append(heading);
  }

  if (text) {
    const description = document.createElement('div');
    description.className = 'title-text-image-text';
    description.replaceChildren(...text.childNodes);
    content.append(description);
  }

  if (image) {
    const figure = document.createElement('div');
    figure.className = 'title-text-image-image';
    figure.replaceChildren(...image.childNodes);
    content.append(figure);
  }

  block.replaceChildren(content);
}
