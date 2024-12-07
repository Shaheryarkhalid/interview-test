import { Router } from 'express'
import multer from 'multer';
const mainRouter = Router();
const upload = multer({ dest: 'uploads/' });



mainRouter.get('/api', (req, res) => {
	return res.json({ message: 'server working fine...' })
})
mainRouter.post('/api/upload', upload.single('FileToBeUploaded'), (req, res) => {
	return res.json({ message: 'File uploaded successfully...' })
})
// mainRouter.listen(8080, () => console.log('Server listening on localhost:8080'))
export default mainRouter