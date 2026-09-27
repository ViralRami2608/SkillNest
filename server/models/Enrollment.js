const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    courseSlug: {
      type: String,
      required: true
    },

    progress: {
      type: Number,
      default: 0
    },

    completedLessons: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Enrollment",
  enrollmentSchema
);