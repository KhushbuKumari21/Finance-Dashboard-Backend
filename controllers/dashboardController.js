const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  const records = await Record.find({ user: req.user.id });

  let income = 0;
  let expense = 0;
  let categoryTotals = {};

  records.forEach((r) => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;

    categoryTotals[r.category] =
      (categoryTotals[r.category] || 0) + r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense,
    categoryTotals
  });
};