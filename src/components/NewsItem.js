import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div>
      <div className="card my-3" style={{ width: "22rem" }}>
        <img
          src={
            !imageUrl
              ? "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhIIBwgVCgkXDQoREAwNDRsUChAWIBIWIiAdHx8YHSggGBolGxUfITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgA3wMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAABQcDBAYBAv/EADoQAQABAwADCwoGAwEAAAAAAAABAgMEBQYREhMWFyExVFWRktEiMjQ1UWFzdLKzBxRBQlKBFTNxI//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDYgAAAAAAAAAAAAAAAAAAAAAAAAACQkAAAAAAAAAAAAAAAAAAAAAAAAAAAkJAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQAAAAAAAAAAAAAAAAAAAAAAAAAACQkAAAAAAAAAE3TOladFU29uNXfrrubimi3s3Uzs2/qCkIPCDK6gyO7T4nCDL6gyO7T4gvCDwgy+oMju0+Jwgy+oMju0+ILwg8IMvqDI7tPicIMvqDI7tPiC8IPCDL6gyO7T4nCDK6gyO7T4gvDo6H0jRpXBjKt25t0zVcjcVedExOx3gAAAAAACQkAAAAAAAABB1l9PwfnafoleQdZfT8H52n6JBeAAHHTetVXps03Im5EUzNET5URPNthyA47123Yt75eri3bjnqqnZTD842Vj5VG7xr1N2jm20VRNLxf4nzk73Z3O38r/6bdnm7v9Nv9Jn4cfmf83O9bd43qrfP4+7+9oNNfJ5n18nmBD1L9Rx8bK+5K6hal+o4+NlfcldAAAAAAAJCQAAAAAAAAEHWX0/B+dp+iV5B1l9PwfnafokF553WzWa3oWxvNiYuZsxyU89NEe2fA1s1mtaGsbzYmLmbMclP7aI9s+DK8i/dyb83r9c3LkztmqqfKmQdvE0vm4ukv8hbvzORuttVVU7d37Yn3NV1e05jabw99tTuLscly1M+VTPgxx29GaQydGZkZWJXuLkTzftqj2T7gbVes28i3vd+3Fy3PPTXG2mXFbtYejceardujGsxG6qmmmKaY98uhoTWHD0ro+crdxaqpp23aKp8z3/8eD1u1nr0xd/LYtU0YUTyRzVXJ9s+73A93oTWTA0zfrsY9W5uUzVspr5N8p/lCxPMwvHv3ca/F6xXNu5E7YqpnyolqequstvTVjer0xbzKaeWj9tce2PAHLqX6jj42V9yV1C1L9RR8XK+5K6AAAAAAASEgAAAAAAAAPJ/iBlXMHHx8qz/ALKciqY2x5O3cS9Yk6w6Es6cx6bN+7VbimvdRNERy8mz9QZBkX7uTfm9frm5cmds1VTtqmXG0bi8wem3Oyk4vMHptzspBnI0bi8wem3Oyk4vMHptzspBnUV1UxMU1bImNkxE88PjRuLzB6bc7KTi8wem3OykGcuTHv3Ma9F6xXNu5E7YqpnZVEtC4vMHptzspOLzB6bc7KQU9RK5r1bt11ctU3MiZ78vQOjoXRtvROj6cO1XNyiJqmKqvO5Z2u8AAAAAAASEgAAAAAAAAAAAAAAAAAAAAAAAAAAEhIAAAAAAAAAAAAAAAAAAAAAAAAAABISAAAAAAAAAAAAAAAAAAAAAAAAAAASEgAAAAAAAAAAAAAAAAAAAAAAAAAAEhIAAAAAAAAAAAAAAAAAAAAAAAAAABIA//9k="
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>
            <span className="badge bg-danger"> {source}</span>
          </h6>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary my-3">
            Read More
          </a>
          <div className="card-footer">
            <small className="text-muted">
              By {author} | {new Date(publishedAt).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
