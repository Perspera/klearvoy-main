import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameZh',
      title: 'Product Name (Chinese)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Wardrobe Hardware', value: 'wardrobe' },
          { title: 'Board Materials', value: 'board' },
          { title: 'Engineering Solutions', value: 'engineering' },
          { title: 'Handles & Knobs', value: 'handle' },
          { title: 'Hinges', value: 'hinge' },
          { title: 'Slides', value: 'slide' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionZh',
      title: 'Description (Chinese)',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featuresZh',
      title: 'Features (Chinese)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'isCustomizable',
      title: 'Is Customizable',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'technicalSpecs',
      title: 'Technical Specifications',
      type: 'object',
      fields: [
        { name: 'material', title: 'Material', type: 'string' },
        { name: 'finish', title: 'Finish', type: 'string' },
        { name: 'weightCapacity', title: 'Weight Capacity', type: 'string' },
        { name: 'warranty', title: 'Warranty', type: 'string' },
        { name: 'dimensions', title: 'Dimensions', type: 'string' },
      ],
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});