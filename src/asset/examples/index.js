export const containerData = [
  {
    containerId: '1234',
    URI: 'yscec.yonsei.ac.kr',
    date: '2022.02.20',
    memory_used: '23MB',
    CPU_total: '15.1%',
    Tx: '0.8/s',
    Rx: '0.9/s',
    status: 'running',
  },
  {
    containerId: '12345',
    URI: 'yscec.yonsei.ac.kr',
    date: '2022.02.20',
    memory_used: '10MB',
    CPU_total: '10.1%',
    Tx: '0.6/s',
    Rx: '0.3/s',
    status: 'running',
  },
  {
    containerId: '12346',
    URI: 'yscec.yonsei.ac.kr',
    date: '2022.02.21',
    memory_used: '15MB',
    CPU_total: '1.1%',
    Tx: '0.2/s',
    Rx: '0.4/s',
    status: 'running',
  },
  {
    containerId: '12347',
    URI: 'yscec.yonsei.ac.kr',
    date: '2022.02.22',
    memory_used: '12MB',
    CPU_total: '6.1%',
    Tx: '0.8/s',
    Rx: '0.8/s',
    status: 'running',
  },
  {
    containerId: '12348',
    URI: 'yscec.yonsei.ac.kr',
    date: '2022.02.23',
    memory_used: '14MB',
    CPU_total: '16.1%',
    Tx: '0.8/s',
    Rx: '0.8/s',
    status: 'running',
  },
]

export const containerColumns = [
  {
    Header: 'containerId',
    accessor: 'containerId',
    width: 150,
  },
  {
    Header: 'URI',
    accessor: 'URI',
    width: 150,
  },
  {
    Header: 'date',
    accessor: 'date',
    width: 100,
  },
  {
    Header: 'memory used',
    accessor: 'memory_used',
    width: 100,
  },
  {
    Header: 'CPU Total',
    accessor: 'CPU_total',
    width: 100,
  },

  {
    Header: 'Tx',
    accessor: 'Tx',
    width: 50,
  },
  {
    Header: 'Rx',
    accessor: 'Rx',
    width: 50,
  },
  {
    Header: 'status',
    accessor: 'status',
    width: 50,
  },
]

export const ImageData = []
export const ImageColumns = []

export const ImageRepoData = [
  { name: 'testRepo1', uri: '81202isn.kcp.repo', date: '2022.10.25' },
  { name: 'testRepo2', uri: '192nvjan.kcp.repo', date: '2022.10.27' },
  { name: 'testRepo3', uri: '12419anv.kcp.repo', date: '2022.10.29' },
]

export const ImageRepoColumns = [
  { Header: 'repository name', accessor: 'name', width: 200 },
  { Header: 'URI', accessor: 'uri', width: 200 },
  { Header: 'date', accessor: 'date', width: 100 },
]
