const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true
    },
    shelf_life: { type: Date, required: true, index: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

ProductSchema.virtual("url").get(function() {
  return `/products/${this._id}`;
});

module.exports = mongoose.model("Product", ProductSchema);
