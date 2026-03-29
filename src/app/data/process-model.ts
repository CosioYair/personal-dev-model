export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface ConceptItem {
  label: string;
  icon?: string;
  /** Optional: wire up later for short context or examples */
  description?: string;
  exampleRefs?: string[];
}

export interface ConceptGroup {
  title: string;
  icon?: string;
  items: ConceptItem[];
}

export interface SectionDefinition {
  title: string;
  groups: ConceptGroup[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Core Engineering', path: '/core', icon: 'architecture' },
  { label: 'Frontend', path: '/frontend', icon: 'web' },
  { label: 'Backend', path: '/backend', icon: 'dns' },
  { label: 'Data Layer', path: '/data', icon: 'storage' },
  { label: 'Workflow & DevOps', path: '/workflow', icon: 'cloud' },
  { label: 'Tech Stack', path: '/tech-stack', icon: 'layers' },
];

export const SECTIONS: Record<string, SectionDefinition> = {
  core: {
    title: 'Core Engineering Principles',
    groups: [
      {
        title: 'Principles & practice',
        icon: 'psychology',
        items: [
          { label: 'Definition of Done (DoD)', icon: 'task_alt' },
          { label: 'SOLID Principles', icon: 'widgets' },
          { label: 'OOP', icon: 'category' },
          { label: 'Clean Architecture (Maintainable and scalable codebase)', icon: 'account_tree' },
          { label: 'CI/CD', icon: 'sync_alt' },
          { label: 'Unit Testing', icon: 'science' },
          { label: 'Agile / Scrum', icon: 'groups' },
          { label: 'Planning Poker', icon: 'style' },
          {
            label: 'Security (roles, cookies, access tokens)',
            icon: 'shield',
          },
          { label: 'Git workflows (PR-based)', icon: 'merge' },
          {
            label: 'AI tools (Cursor IDE, Claude Opus & Sonnet)',
            icon: 'smart_toy',
          },
        ],
      },
    ],
  },
  frontend: {
    title: 'Frontend',
    groups: [
      {
        title: 'Architecture & patterns',
        icon: 'hub',
        items: [
          { label: 'Feature-based architecture', icon: 'folder_special' },
          {
            label: 'Component patterns (Container vs Presentational)',
            icon: 'view_module',
          },
          { label: 'OAuth', icon: 'lock_open' },
        ],
      },
      {
        title: 'UI & layout',
        icon: 'smartphone',
        items: [
          {
            label: 'Responsive UI (Grid, Flexbox, media queries)',
            icon: 'aspect_ratio',
          },
          { label: 'Semantic HTML', icon: 'article' },
        ],
      },
      {
        title: 'Reactivity & loading',
        icon: 'bolt',
        items: [
          { label: 'RxJS and Signals services', icon: 'timeline' },
          { label: 'Angular standalone components', icon: 'view_quilt' },
          { label: 'Lazy loading (components & images)', icon: 'hourglass_empty' },
          { label: 'Image optimization (resize & compression)', icon: 'image' },
          {
            label: 'Cloud storage (S3 + DB references)',
            icon: 'cloud_upload',
          },
        ],
      },
    ],
  },
  backend: {
    title: 'Backend',
    groups: [
      {
        title: 'API & structure',
        icon: 'storage',
        items: [
          { label: 'MVC architecture', icon: 'view_quilt' },
          { label: 'REST APIs', icon: 'api' },
          { label: 'ORM', icon: 'grid_on' },
          { label: 'Middlewares', icon: 'linear_scale' },
          {
            label: 'JWT authentication (cookies + refresh tokens)',
            icon: 'vpn_key',
          },
        ],
      },
    ],
  },
  data: {
    title: 'Data Layer',
    groups: [
      {
        title: 'Persistence & jobs',
        icon: 'grid_on',
        items: [
          { label: 'ER diagrams', icon: 'schema' },
          { label: 'Table relationships', icon: 'link' },
          { label: 'Stored procedures', icon: 'functions' },
          { label: 'Background jobs', icon: 'schedule' },
        ],
      },
    ],
  },
  workflow: {
    title: 'Workflow & DevOps',
    groups: [
      {
        title: 'CI/CD',
        icon: 'published_with_changes',
        items: [{ label: 'CI/CD pipelines', icon: 'account_tree' }],
      },
      {
        title: 'Version control',
        icon: 'source',
        items: [{ label: 'Version control workflows', icon: 'fork_right' }],
      },
      {
        title: 'Release',
        icon: 'rocket_launch',
        items: [{ label: 'Deployment flow (QA → Production)', icon: 'move_up' }],
      },
    ],
  },
};

export interface TechStackGroup {
  title: string;
  icon: string;
  items: string[];
}

export const TECH_STACK_GROUPS: TechStackGroup[] = [
  {
    title: 'Client',
    icon: 'web',
    items: [
      'Angular',
      'RxJS',
      'Signals',
      'JavaScript',
      'jQuery',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Server',
    icon: 'dns',
    items: ['Node.js', 'Express', '.NET / C#'],
  },
  {
    title: 'Data stores',
    icon: 'storage',
    items: ['MySQL', 'PostgreSQL', 'Couchbase'],
  },
  {
    title: 'Platform & identity',
    icon: 'cloud',
    items: ['Azure DevOps', 'OKTA', 'OAuth with Gmail'],
  },
  {
    title: 'Real-time',
    icon: 'bolt',
    items: ['Socket.io / SignalR'],
  },
];
