const fetchFileTree = async (url) => {
    let response = await fetch(url);

    if (!response.ok) throw response;

    let data = await response.json();
    
    let tree = [];
    let elements = Object.keys(data);
    for (let i = 0 ; i < elements.length ; i++) {
        if (data[elements[i]].type == 'dir') {
            let children = await fetchFileTree(data[elements[i]].url)
            if (children.length > 0)
                tree.push({
                    key: data[elements[i]].name,
                    label: data[elements[i]].name,
                    nodes: children
                });
        } else if (data[elements[i]].type == 'file' && data[elements[i]].name.endsWith('.md')) {
            tree.push({
                key: data[elements[i]].name,
                label: data[elements[i]].name,
                url: data[elements[i]].download_url
            })
        }
    }
    return tree;
};

const getContent = async (url) => {
    let response = await fetch(url);

    if (!response.ok) throw response;

    let content = await response.text();

    return content;
};

export default {
    fetchFileTree,
    getContent
}