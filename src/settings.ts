import * as Path from 'path';

export const settings = {
	LOG_PATH: process.env.LOG_PATH || Path.resolve(__dirname, '../log'),
	PORT: process.env.PORT || 4000,
	PUBLIC_PATH: process.env.PUBLIC_PATH || Path.resolve(__dirname, '../public'),
}