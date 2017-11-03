import {Express, Request, Response} from 'express';
import * as EmployeeRoute from './employee.routes';
import * as TeamRoute from './team.routes';

export function initRoutes(app: Express) {

	app.get('/api', (req: Request, res: Response) => {
		res.status(200).send({
			message: 'server is running!'
		});
	});

	// Routes 정의
	EmployeeRoute.routes(app);
	TeamRoute.routes(app);
}