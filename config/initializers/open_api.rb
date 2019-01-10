require 'open_api'

OpenApi::Config.tap do |c|
  # [REQUIRED] The output location where .json doc file will be written to.
  c.file_output_path = 'public/doc'

  c.open_api_docs = {
      # The definition of the document `homepage`.
      homepage: {
          # [REQUIRED] ZRO will scan all the descendants of base_doc_classes, then generate their docs.
          base_doc_classes: [ApiDoc],

          # [REQUIRED] OAS Info Object: The section contains API information.
          info: {
              # [REQUIRED] The title of the application.
              title: 'Movie Database',
              # Description of the application.
              description: 'Api Doc for our Movie Database. <br/>',
              # [REQUIRED] The version of the OpenAPI document
              # (which is distinct from the OAS version or the API implementation version).
              version: '3.0.0'
          }
      }
  }
end
