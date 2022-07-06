import express from 'express';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSMongoose from '@adminjs/mongoose';

import { Person } from './models';
import editViewLayout from './layouts/edit';

AdminJS.registerAdapter(AdminJSMongoose);

AdminJS.bundle('./components/custom-sidebar-footer', 'SidebarFooter');

const run = async () => {
  const app = express();
  
  await mongoose.connect('mongodb://rafal:password@localhost:27017/mongodb_repro');

  const admin = new AdminJS({
    resources: [
      {
        resource: Person,
        options: {
          navigation: {
            name: 'Mongoose Models',
            icon: 'User',
          },
          properties: {
            picture: {
              type: 'string',
              components: {
                show: AdminJS.bundle('./components/picture', 'Picture' as any),
              }
            }
          },
          actions: {
            edit: {
              layout: editViewLayout,
            }
          }
        },
      }
    ]
  });
  admin.watch();

  const router = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath || '/admin', router);

  app.listen(3000, () => {
    console.log('app started');
  });
}

run();
