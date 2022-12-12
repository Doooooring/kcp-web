export const containerData = [
  {
    container_id: "1234",
    uri: "yscec.yonsei.ac.kr",
    date: "2022.02.20",
    memory_used: "23MB",
    cpu_total: "15.1%",
    tx: "0.8/s",
    rx: "0.9/s",
    status: "running",
  },
  {
    container_id: "12345",
    uri: "yscec.yonsei.ac.kr",
    date: "2022.02.20",
    memory_used: "10MB",
    cpu_total: "10.1%",
    tx: "0.6/s",
    rx: "0.3/s",
    status: "running",
  },
  {
    container_id: "12346",
    uri: "yscec.yonsei.ac.kr",
    date: "2022.02.21",
    memory_used: "15MB",
    cpu_total: "1.1%",
    tx: "0.2/s",
    rx: "0.4/s",
    status: "running",
  },
  {
    container_id: "12347",
    uri: "yscec.yonsei.ac.kr",
    date: "2022.02.22",
    memory_used: "12MB",
    cpu_total: "6.1%",
    tx: "0.8/s",
    rx: "0.8/s",
    status: "running",
  },
  {
    container_id: "12348",
    uri: "yscec.yonsei.ac.kr",
    date: "2022.02.23",
    memory_used: "14MB",
    cpu_total: "16.1%",
    tx: "0.8/s",
    rx: "0.8/s",
    status: "running",
  },
];

export const containerColumns = [
  {
    Header: "container_id",
    accessor: "container_id",
    width: 150,
  },
  {
    Header: "URI",
    accessor: "uri",
    width: 150,
  },
  {
    Header: "date",
    accessor: "date",
    width: 100,
  },
  {
    Header: "memory used",
    accessor: "memory_used",
    width: 100,
  },
  {
    Header: "CPU Total",
    accessor: "cpu_total",
    width: 100,
  },

  {
    Header: "Tx",
    accessor: "tx",
    width: 50,
  },
  {
    Header: "Rx",
    accessor: "rx",
    width: 50,
  },
  {
    Header: "status",
    accessor: "status",
    width: 50,
  },
];

export const ImageData = [
  {
    imageId: "880912847",
    Tag: "latest",
    Status: "unused",
    Created: "about 1months ago",
    Size: "330.70MB",
  },
  {
    imageId: "880018847",
    Tag: "latest",
    Status: "unused",
    Created: "about 2months ago",
    Size: "167.70MB",
  },
  {
    imageId: "72912847",
    Tag: "latest",
    Status: "unused",
    Created: "about 3months ago",
    Size: "350.70MB",
  },
  {
    imageId: "1516912847",
    Tag: "latest",
    Status: "unused",
    Created: "about 4months ago",
    Size: "330MB",
  },
];
export const ImageColumns = [
  { Header: "Image Id", accessor: "imageId" },
  { Header: "Tag", accessor: "Tag" },
  { Header: "Status", accessor: "Status" },
  { Header: "Created", accessor: "Created" },
  { Header: "Size", accessor: "Size" },
];

export const ImageRepoData = [
  { name: "testRepo1", uri: "81202isn.kcp.repo", date: "2022.10.25" },
  { name: "testRepo2", uri: "192nvjan.kcp.repo", date: "2022.10.27" },
  { name: "testRepo3", uri: "12419anv.kcp.repo", date: "2022.10.29" },
];

export const ImageRepoColumns = [
  { Header: "repository name", accessor: "name", width: 200 },
  { Header: "uri", accessor: "uri", width: 200 },
  { Header: "date", accessor: "date", width: 100 },
];
