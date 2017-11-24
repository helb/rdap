export default async (backendUrl, path, data) =>
  fetch(`${backendUrl}${path}/${data}`).then((r) => {
    switch (r.status) {
      case 404:
        return { status: r.status };
      default:
        return r.json();
    }
  });
