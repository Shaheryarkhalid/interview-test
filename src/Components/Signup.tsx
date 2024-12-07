export default function SignUp()
{
	return(
		<div>
			<form action="http://localhost:8080/upload" method="post" encType="multipart/form-data">
				<label htmlFor="FileToBeUploaded">Upload File</label>
				<input type="file" name='FileToBeUploaded' id='FileToBeUploaded' />
				<input type='submit' />
			</form>
		</div>
	)
}