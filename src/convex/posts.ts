import { mutation, query } from './_generated/server.js';

export const get = query({
	handler: async (ctx) => {
		console.log('Write and test your query function here!');
		return await ctx.db.query('posts').order('desc').take(10);
	}
});

export const post = mutation({
	handler: async (ctx, { title, content, date }) => {
		const post = await ctx.db.insert('posts', {
			title,
			content,
			date
		});
		return post;
	}
});
