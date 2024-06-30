import { rest } from 'msw'

import { getEnvironmentVariables } from '@/tools/tools'

export const handlers = [
    // Get the `todos` list from the API
    rest.get(`${getEnvironmentVariables('apiBaseUrl')}/todos`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    userId: 1001,
                    id: 1001,
                    title: 'Mocked To Do 1001',
                    completed: true
                },
                {
                    userId: 1001,
                    id: 1002,
                    title: 'Mocked To Do 1002',
                    completed: false
                }
            ])
        )
    }),
]
