/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// allows import with webpack-loader, e.g. import icon from 'raw-loader!./icon.svg';
declare module '*';
