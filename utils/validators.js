// Validate Financial Record
exports.validateRecord = (req, res, next) => {
  const { amount, type, category, date } = req.body;

  // Required fields
  if (amount === undefined || type === undefined || category === undefined) {
    return res.status(400).json({
      message: "Amount, type, and category are required"
    });
  }

  // Amount validation
  if (typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({
      message: "Amount must be a positive number"
    });
  }

  // Type validation
  if (!["income", "expense"].includes(type)) {
    return res.status(400).json({
      message: "Type must be either 'income' or 'expense'"
    });
  }

  // Category validation
  if (typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({
      message: "Category must be a valid string"
    });
  }

  // Date validation (optional)
  if (date && isNaN(Date.parse(date))) {
    return res.status(400).json({
      message: "Invalid date format"
    });
  }

  next();
};

// Validate User Registration
exports.validateUserRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  // Required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email, and password are required"
    });
  }

  // Email validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format"
    });
  }

  // Password validation
  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long"
    });
  }

  next();
};