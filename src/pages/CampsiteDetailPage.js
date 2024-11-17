import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectedCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import SubHeader from '../components/SubHeader';
import CommentsList from '../features/comments/CommentList';

const CampsiteDetailPage = () => {
    const {campsiteId} = useParams();
    const campsite = selectedCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
}

export default CampsiteDetailPage;