const data = [
    {
        name: 'foo.pdf',
        metadata: { mimeType: 'application/pdf' },
    },
    {
        name: 'foo.png',
        metadata: { mimeType: 'image/png' }
    },
    {
        name: 'foo.bar',
        metadata: { mimeType: 'image/png' }
    },
    {
        name: 'foo.jpg'
    },
    {
        name: 'foo.bar.json',
        metadata: { mimeType: 'application/json' }
    },
    {
        name: 'foo'
    }
]

const isTypeImage = (viewType) => {
    return ["jpg", "jpeg", "jfif", "pjpeg", "pjp", "png"].indexOf(viewType) !== -1;
}

const isTypePDF = (viewType) => {
    return viewType === 'pdf'
}

const setViewType = (viewerType) => {
    if (isTypeImage(viewerType)) return 'image';
    if (isTypePDF(viewerType)) return 'pdf';
}

const getViewerType = (rs) => {
    const mimeType = rs.metadata && rs.metadata.mimeType;
    const name = rs.name;

    if (mimeType) {
        const viewerType = mimeType.split('/')[1]
        return setViewType(viewerType);
    }
    if (name) {
        const viewerType = name.split('.').pop();
        return setViewType(viewerType);
    }

    throw 'not supported type';
}