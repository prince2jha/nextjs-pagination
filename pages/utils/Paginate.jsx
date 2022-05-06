import React from 'react';
import _ from 'lodash';

const Paginate = (items , pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    // const endIndex = Math.min(startIndex + pageSize - 1, items.length - 1);
    return _(items).slice(startIndex).take(pageSize).value();
}

export default Paginate