import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import {Button, CircularProgress, Typography} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InfiniteScroll from 'react-infinite-scroll-component';

const UrlListView = ({servicesName, mapperNameSpace, mapperId, defaultPageSize, setIsModalOpen}) => {
    const [data, setData] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        last: false,
        pageSize: defaultPageSize,
        pageNumber: 0,
        totalElements: 0,
    });
    const [isLoading, setIsLoading] = useState(true); // isLoading 상태 추가
    // const END_POINT_URL = `http://localhost:8080/api/url/mapperId/${servicesName}/${mapperNameSpace}/${mapperId}`;
    const END_POINT_URL = `api/url/mapperId/${servicesName}/${mapperNameSpace}/${mapperId}`;

    useEffect(() => {
        fetchData();
    }, [servicesName, mapperNameSpace, mapperId]); // URL 파라미터가 변경될 때마다 데이터를 다시 가져옴

    const fetchData = async () => {
        try {
            const response =
                await axios.get(END_POINT_URL, {
                    params: {
                        page: pageInfo.pageNumber,
                        size: pageInfo.pageSize
                    },
                });
            setData(response.data.content);
            setPageInfo({
                pageSize: response.data.pageable.pageSize,
                pageNumber: response.data.pageable.pageNumber,
                last: response.data.last,
                totalElements: response.data.totalElements,
            });
            setIsLoading(false); // 데이터를 모두 가져오면 로딩 상태를 false로 변경
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchMoreData = async () => {
        // 페이징 정보 업데이트
        try {
            const response =
                await axios.get(END_POINT_URL, {
                    params: {
                        page: pageInfo.pageNumber + 1, // Increment the page number
                        size: pageInfo.pageSize,
                    },
                });
            setData((prevData) => [...prevData, ...response.data.content]);
            setPageInfo({
                pageSize: response.data.pageable.pageSize,
                pageNumber: response.data.pageable.pageNumber,
                last: response.data.last,
                totalElements: response.data.totalElements,
            });
        } catch (error) {
            console.error('Error fetching more data:', error);
        }
    }

    return (<Container fixed style={{maxWidth: '1800px'}}>
        {isLoading ? ( // isLoading 상태를 확인하여 로딩 화면을 표시
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress/>
            </div>
        ) : (
            <InfiniteScroll
                dataLength={data.length} // 현재 표시된 아이템 수
                next={fetchMoreData} // 스크롤이 바닥에 닿을 때 호출되는 함수
                hasMore={!pageInfo.last} // 더 많은 아이템이 있는지 여부
                loader={<Typography></Typography>} // 로딩 중에 보여질 컴포넌트
            >
                <TableContainer component={Paper}>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        textAlign: 'center',
                        marginTop: '20px'
                    }}>
                        <Typography id="mapperType" variant="h6" component="h2">
                            Total : {pageInfo.totalElements}
                        </Typography>
                        <Typography id="mapperId" variant="h6" component="h2">
                            {mapperId}
                        </Typography>
                        <Button variant="outlined" onClick={() => setIsModalOpen(false)}> 닫기 </Button>
                    </div>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>SERVICE_NAME</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>METHOD_NAME</TableCell>
                                <TableCell>CLASS_NAME</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(
                                (row, index) =>
                                    (<TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                        <TableCell>
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>{row.serviceName}</TableCell>
                                        <TableCell>{row.url}</TableCell>
                                        <TableCell>{row.methodName}</TableCell>
                                        <TableCell>{row.className}</TableCell>
                                    </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                    {!pageInfo.last ? (
                        <Button variant="outlined" onClick={fetchMoreData} fullWidth> 더보기 </Button>
                    ) : (<Typography></Typography>)}
                </div>
            </InfiniteScroll>
        )}
    </Container>)
};

export default UrlListView;
