import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleZh',
      title: 'Page Title (Chinese)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Products', value: 'products' },
          { title: 'Cases', value: 'cases' },
          { title: 'News', value: 'news' },
          { title: 'Download', value: 'download' },
          { title: 'Contact', value: 'contact' },
          { title: 'Custom', value: 'custom' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaTitleZh',
      title: 'Meta Title (Chinese)',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'metaDescriptionZh',
      title: 'Meta Description (Chinese)',
      type: 'text',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleZh',
      title: 'Hero Title (Chinese)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroSubtitleZh',
      title: 'Hero Subtitle (Chinese)',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', title: 'Section Type', type: 'string', options: { list: ['text', 'image', 'quote', 'cta'] } },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'titleZh', title: 'Title (Chinese)', type: 'string' },
            { name: 'text', title: 'Text', type: 'text' },
            { name: 'textZh', title: 'Text (Chinese)', type: 'text' },
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
            { name: 'buttonTextZh', title: 'Button Text (Chinese)', type: 'string' },
            { name: 'buttonUrl', title: 'Button URL', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});