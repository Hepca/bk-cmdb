/*
 * Tencent is pleased to support the open source community by making 蓝鲸 available.,
 * Copyright (C) 2017,-2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the ",License",); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an ",AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

package association_test

import (
	"context"
	"testing"

	"configcenter/src/common/errors"
	"configcenter/src/common/language"
	"configcenter/src/common/metadata"
	"configcenter/src/source_controller/coreservice/core"
	"configcenter/src/source_controller/coreservice/core/association"
	"configcenter/src/source_controller/coreservice/core/instances"
	"configcenter/src/storage/dal/mongo"

	"github.com/stretchr/testify/require"
)

type instDependences struct {
}

// IsInstanceExist used to check if the  instances  asst exist
func (s *instDependences) IsInstAsstExist(ctx core.ContextParams, objID string, instID uint64) (exists bool, err error) {
	return false, nil
}

// DeleteInstAsst used to delete inst asst
func (s *instDependences) DeleteInstAsst(ctx core.ContextParams, objID string, instID uint64) error {
	return nil
}

// SelectObjectAttWithParams select object att with params
func (s *instDependences) SelectObjectAttWithParams(ctx core.ContextParams, objID string) (attribute []metadata.Attribute, err error) {
	return nil, nil
}

// SearchUnique search unique attribute
func (s *instDependences) SearchUnique(ctx core.ContextParams, objID string) (uniqueAttr []metadata.ObjectUnique, err error) {
	return nil, nil
}

type mockDependences struct {
}

func (m *mockDependences) IsInstanceExist(ctx core.ContextParams, objID string, instID uint64) (exists bool, err error) {
	return false, nil
}

func newAssociation(t *testing.T) core.AssociationOperation {

	db, err := mongo.NewMgo("mongodb://cc:cc@localhost:27010,localhost:27011,localhost:27012,localhost:27013/cmdb")
	require.NoError(t, err)
	return association.New(db, &mockDependences{})
}

func newInstances(t *testing.T) core.InstanceOperation {

	db, err := mongo.NewMgo("mongodb://cc:cc@localhost:27010,localhost:27011,localhost:27012,localhost:27013/cmdb")
	require.NoError(t, err)
	return instances.New(db, &instDependences{})
}

var defaultCtx = func() core.ContextParams {
	err, _ := errors.New("../../../../../resources/errors/")
	lan, _ := language.New("../../../../../resources/language/")
	return core.ContextParams{
		Context:         context.Background(),
		ReqID:           "test_req_id",
		SupplierAccount: "test_owner",
		User:            "test_user",
		Error:           err.CreateDefaultCCErrorIf("en"),
		Lang:            lan.CreateDefaultCCLanguageIf("en"),
	}
}()
