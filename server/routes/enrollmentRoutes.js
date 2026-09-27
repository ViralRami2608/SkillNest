const express = require("express");
const Enrollment = require("../models/Enrollment");

const router = express.Router();


// Enroll in a course
router.post("/", async (req, res) => {
  try {
    const { userId, courseSlug } = req.body;

    if (!userId || !courseSlug) {
      return res.status(400).json({
        message: "User ID and course are required"
      });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      user: userId,
      courseSlug: courseSlug
    });

    if (existingEnrollment) {
      return res.status(400).json({
        message: "Already enrolled in this course"
      });
    }

    const enrollment = await Enrollment.create({
      user: userId,
      courseSlug: courseSlug
    });

    res.status(201).json({
      message: "Course enrolled successfully",
      enrollment
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});


// Get user's enrolled courses
router.get("/:userId", async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      user: req.params.userId
    });

    res.status(200).json(enrollments);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});

// Update course progress
router.put("/:id", async (req, res) => {
  try {
    const { completedLessons, progress } = req.body;

    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      {
        completedLessons,
        progress
      },
      {
        new: true
      }
    );

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found"
      });
    }

    res.status(200).json({
      message: "Progress updated successfully",
      enrollment
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;