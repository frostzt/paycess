class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // Filtering request
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFileds = ['page', 'sort', 'limit', 'fields'];
    excludedFileds.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  // Sorting
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  // Limiting
  limitFields() {
    if (this.queryString.fields) {
      const fieldVal = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fieldVal);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  // Pagination
  paginate() {
    const pageNum = this.queryString.page * 1 || 1;
    const disLimit = this.queryString.limit * 1 || 100;
    const skip = (pageNum - 1) * disLimit;

    this.query = this.query.skip(skip).limit(disLimit);
    return this;
  }
}

module.exports = APIFeatures;
